
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "shaneisgoodboy"



const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
          return  res.status(403).json({success:false, message: "Please fill the data" });
        }
        const adminLogin = await Admin.findOne({ email: email });
        console.log(adminLogin)
        if (adminLogin) {
            const isMatch = await bcrypt.compare(password, adminLogin.password);
            console.log(isMatch);

            const token = jwt.sign({ _id: adminLogin._id }, JWT_SECRET);
            // console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true,
            });
            if (!isMatch) {
               return res.status(401).json({ success:false , message: "Invalid Credentials" });
            } else {
              return  res.json({ success: true, token: token, message: "Login Successfull"  });
            }
        } else {
          return  res.status(401).json({ success:false ,message : "Invalid Credentials" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success:false ,message : "Internal Server Error" });
    }
};


const adminRegister = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
          return  res.status(400).json({ error: "Please fill the data" });
        }
        const adminExist = await Admin.findOne({ email: email });
        if (adminExist) {
          return  res.status(400).json({ error: "Admin already exist" });
        }
          const  passwordHash = await bcrypt.hash(password, 10);
        const admin = new Admin({
            email: email,
            password: passwordHash,
        });
        await admin.save();
        res.status(201).json({ success: true, message: "Admin Register Successfull" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success:false ,message : "Internal Server Error" });
    }
};

const adminLogout = async (req, res) => {
    res.clearCookie("jwtoken", { path: "/" });
    res.status(200).json({ success: true, message: "Logout Successfull" });
}

module.exports = { adminLogin, adminRegister, adminLogout };

