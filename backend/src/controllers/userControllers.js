const User = require('../models/users');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        if (password !== user.password) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        res.json({
            body: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
            isAdmin: user.isAdmin,
        });

    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
