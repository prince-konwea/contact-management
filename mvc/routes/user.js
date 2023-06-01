import {express} from "express";

const router = express.Router();

import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/user"

router.get('/all', getAllUsers);
router.get("/byId:Id", getUserById);
router.post("/create", createUser);
router.put("/update", updateUser);
router.deleteUser("/:id", deleteUser);

export { router as UserRouter};