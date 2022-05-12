export default async function validation(data, schemaValidation) {
  try {
    await schemaValidation.validateAsync({ ...data })
  } catch (error) {
    return error.message
  }
}
