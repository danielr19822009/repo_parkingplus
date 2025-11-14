const proyecto = {
  home: (req, res) => {
    try {
      res.render('login', { nombrePagina: 'Iniciar Sesión - ParkingPlus' });
    } catch (error) {
      console.error('Error al renderizar login:', error);
      res.status(500).send('Error al cargar la página');
    }
  },
  contactenos: (req, res) => {
    try {
      res.render('nosotros', { nombrePagina: 'Nosotros - ParkingPlus' });
    } catch (error) {
      console.error('Error al renderizar nosotros:', error);
      res.status(500).send('Error al cargar la página');
    }
  }
};

export default proyecto;