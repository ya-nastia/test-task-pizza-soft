export const isCompletePhoneNumber = (phone: string) => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  return cleanPhone.length === 11;
};

export const isCompleteBirthday = (birthday: string) => {
  const cleanBirthday = birthday.replace(/[^0-9]/g, '');
  return cleanBirthday.length === 8;
};