import {express} from "express";

export const getAllUsers = (req, res) => {
    res.json({
        message: "this is all the users"
    })
}