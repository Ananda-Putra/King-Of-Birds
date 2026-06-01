import Joi from 'joi'

const createRegistrationSchema = Joi.object({
  id: Joi.string().max(20).required().messages({
    "string.base": "ID registrasi harus berupa string",
    "string.empty": "ID registrasi tidak boleh kosong",
    "string.max": "ID registrasi maksimal 20 karakter",
    "any.required": "ID registrasi wajib diisi",
  }),
  user_id: Joi.string().max(20).required().messages({
    "string.base": "User ID harus berupa string",
    "string.empty": "User ID tidak boleh kosong",
    "string.max": "User ID maksimal 20 karakter",
    "any.required": "User ID wajib diisi",
  }),
  event_id: Joi.string().max(20).required().messages({
    "string.base": "Event ID harus berupa string",
    "string.empty": "Event ID tidak boleh kosong",
    "string.max": "Event ID maksimal 20 karakter",
    "any.required": "Event ID wajib diisi",
  }),
  bird_id: Joi.string().max(20).required().messages({
    "string.base": "Bird ID harus berupa string",
    "string.empty": "Bird ID tidak boleh kosong",
    "string.max": "Bird ID maksimal 20 karakter",
    "any.required": "Bird ID wajib diisi",
  }),
  kategori: Joi.string().max(100).required().messages({
    "string.base": "Kategori harus berupa string",
    "string.empty": "Kategori tidak boleh kosong",
    "string.max": "Kategori maksimal 100 karakter",
    "any.required": "Kategori wajib diisi",
  }),
  nomor_peserta: Joi.string().max(20).optional().allow(null, "").messages({
    "string.base": "Nomor peserta harus berupa string",
    "string.max": "Nomor peserta maksimal 20 karakter",
  }),
  status_bayar: Joi.string().max(20).required().messages({
    "string.base": "Status bayar harus berupa string",
    "string.empty": "Status bayar tidak boleh kosong",
    "string.max": "Status bayar maksimal 20 karakter",
    "any.required": "Status bayar wajib diisi",
  }),
})

const updateRegistrationSchema = Joi.object({
  kategori: Joi.string().max(100).optional().messages({
    "string.base": "Kategori harus berupa string",
    "string.max": "Kategori maksimal 100 karakter",
  }),
  nomor_peserta: Joi.string().max(20).optional().allow(null, "").messages({
    "string.base": "Nomor peserta harus berupa string",
    "string.max": "Nomor peserta maksimal 20 karakter",
  }),
  status_bayar: Joi.string().max(20).optional().messages({
    "string.base": "Status bayar harus berupa string",
    "string.max": "Status bayar maksimal 20 karakter",
  }),
})

export { createRegistrationSchema, updateRegistrationSchema }