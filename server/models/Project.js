import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    isModerated: { type: Boolean, default: false },
    name: { type: String, required: true },
    description: { type: String, required: true },
    gitLink: { type: String },
    tags: { type: [String], default: [] },
},{
    timestamps: true
})

export default mongoose.model('Project', projectSchema);