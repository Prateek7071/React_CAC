import React from 'react';

export const serializeUser = (user) => ({
  $id: user.$id,
  name: user.name,
  email: user.email,
  emailVerification: user.emailVerification,
  status: user.status,
})