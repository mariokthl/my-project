module.exports.serialize = (user) => ({ id: user.id, theme: user.preferences?.theme ?? 'light' });
