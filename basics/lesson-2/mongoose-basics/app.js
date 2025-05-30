const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://qoosim:Ayinde_3609@cluster0.q6xnu69.mongodb.net/"
).then(() => console.log("Database connected")
).catch((err) => console.log(`Error occured while connecting: ${err}`)
)

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: { type: Date, default: Date.now}
})

// User model

const User = mongoose.model('User', userSchema)

const querySample = async () => {
    try {
        // One way to create a new user
        // const newUser = await User.create({
        //     name: "Babaloje",
        //     email: "babaloje@gmail.com",
        //     age: "58",
        //     isActive: false,
        //     tags: ["Weaver"]
        // })
        // Another way to create a new user
        // const newUser = new User({
        //     name: "Kassy",
        //     email: "kassy@gmail.com",
        //     age: "20",
        //     tags: ["Manager", "CEO", "HR"]
        // })

        // await newUser.save()

        // console.log(newUser);

        // Get all d users
        // const allUsers = await User.find({})
        // console.log(allUsers);

        // Get all not active users
        // const notActiveUsers = await User.find({ isActive: false })
        // console.log(notActiveUsers);

        // Get all active users
        // const activeUsers = await User.find({ isActive: true })
        // console.log(activeUsers);
        
        // const getOneUser = await User.findOne({ name: "Kenny 1" })
        // console.log(getOneUser);

        // const getUserById = await User.findById(newUser._id)
        // console.log(getUserById);
        
        // Get selected fields and use minus to exclude
        // const selectedFields = await User.find({}).select('name  email -_id')
        // console.log(selectedFields);

        // Get first five users and skip d first user
        // const limitedUsers = await User.find().limit(5).skip(2)
        // console.log(limitedUsers);

        // Sort users by age in descending order
        // const sortUsersByDesc = await User.find().sort({ age: -1 })
        // console.log(sortUsersByDesc);
        
        // Sort users by age in ascending order
        // const sortUsersByAsc = await User.find().sort({ age: 1 })
        // console.log(sortUsersByAsc);
        
        // Count document
        // const countDocuments = await User.countDocuments({ isActive: true })
        // console.log(countDocuments);

        // Delete a user by id
        // const deletedUser = await User.findByIdAndDelete({_id: "6839e4c467673bc29e4c1e08"})
        // console.log("Deleted User -> ", deletedUser);
        
        
        
    } catch (error) {
        console.log(`Error -> ${error}`);
        
    } finally {
        await mongoose.connection.close()
    }
}

querySample()