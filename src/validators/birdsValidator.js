import Joi from 'joi'

const createBirdSchema = Joi.object({
  id: Joi.string().max(20).required().messages({
    "string.base": "ID burung harus berupa string",
    "string.empty": "ID burung tidak boleh kosong",
    "string.max": "ID burung maksimal 20 karakter",
    "any.required": "ID burung wajib diisi",
  }),
  user_id: Joi.string().max(20).required().messages({
    "string.base": "User ID harus berupa string",
    "string.empty": "User ID tidak boleh kosong",
    "string.max": "User ID maksimal 20 karakter",
    "any.required": "User ID wajib diisi",
  }),
  nama: Joi.string().max(100).required().messages({
    "string.base": "Nama burung harus berupa string",
    "string.empty": "Nama burung tidak boleh kosong",
    "string.max": "Nama burung maksimal 100 karakter",
    "any.required": "Nama burung wajib diisi",
  }),
  jenis: Joi.string().max(100).required().messages({
    "string.base": "Jenis burung harus berupa string",
    "string.empty": "Jenis burung tidak boleh kosong",
    "string.max": "Jenis burung maksimal 100 karakter",
    "any.required": "Jenis burung wajib diisi",
  }),
})

const updateBirdSchema = Joi.object({
  nama: Joi.string().max(100).optional().messages({
    "string.base": "Nama burung harus berupa string",
    "string.max": "Nama burung maksimal 100 karakter",
  }),
  jenis: Joi.string().max(100).optional().messages({
    "string.base": "Jenis burung harus berupa string",
    "string.max": "Jenis burung maksimal 100 karakter",
  }),
})

export { createBirdSchema, updateBirdSchema }