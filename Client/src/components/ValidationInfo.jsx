export default function ValidateInfo(user) {
    let errors = {};
  
    if (!user.full_name.trim()) {
      errors.full_name = 'Full name required';
    }
  
    if (!user.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!user.phone_number) {
      errors.phone_number = 'Phone number is required';
    } else if (!/^[0-9+]{1,}$/.test(user.phone_number)) {
      errors.phone_number = 'Please enter vailid mobile number';
    }

    if (user.hear_about_us.length > 20) {
        errors.hear_about_us = 'Please enter not more than 20 words';
      }

    return errors;
  }