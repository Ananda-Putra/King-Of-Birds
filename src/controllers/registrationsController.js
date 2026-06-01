import registrationModel from "../models/registrationsModel.js";

const getAll = async (req, res, next) => {
  try {
    const registrations = await registrationModel.getAll();
    if (!registrations || registrations.length === 0)
      return res.status(404).json({ error: "Data tidak ditemukan" });
    return res.status(200).json({
      status: true,
      message: "berhasil",
      data: registrations,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const registration = await registrationModel.getById(id);
    if (!registration)
      return res.status(404).json({ error: "Data tidak ditemukan" });
    return res.status(200).json({
      status: true,
      message: "berhasil",
      data: registration,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const create = async (req, res, next) => {
  try {
    const data = req.body;

    const newRegistration = await registrationModel.create(data);
    return res.status(201).json({
      status: true,
      message: "berhasil",
      data: newRegistration,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const registration = await registrationModel.getById(id);
    if (!registration)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    const updatedRegistration = await registrationModel.update(data, id);
    return res.status(200).json({
      status: true,
      message: "berhasil",
      data: updatedRegistration,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const registration = await registrationModel.getById(id);
    if (!registration)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    await registrationModel.delete(id);
    return res.status(200).json({
      status: true,
      message: "berhasil dihapus",
      data: registration,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default { getAll, getById, create, update, destroy };