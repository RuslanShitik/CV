import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // FK для пользователя, кто создал проект
    createdAt: { type: Date, default: Date.now, required: true },
    isModerated: { type: Boolean, default: false },
    name: { type: String, required: true },
    description: { type: String, required: true },
    gitLink: { type: String },
    tags: { type: [String], default: [] },
});

export default mongoose.model('Project', projectSchema);