const proyecto = {
  home: (req, res) => {
    try {
      res.render('login', { nombrePagina: 'login - ParkingPlus' });
    } catch (error) {
      console.error('Error al renderizar login:', error);
      res.status(500).send('Error al cargar la página');
    }
  },

  login: (req, res) => {
    try {
      res.render('login', { nombrePagina: 'login - ParkingPlus' });
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
  },
    menu: (req, res) => {
    try {
      res.render('menuprincipal', { nombrePagina: 'menu - ParkingPlus' });
    } catch (error) {
      console.error('Error al renderizar nosotros:', error);
      res.status(500).send('Error al cargar la página');
    }
  },

    parqueadero: (req, res) => {
    try {
<<<<<<< HEAD
      res.render('parqueaderos', { nombrePagina: 'parqueaderos - ParkingPlus' });
=======
      res.render('menuparqueadero', { nombrePagina: 'parqueaderos - ParkingPlus' });
>>>>>>> master
    } catch (error) {
      console.error('Error al renderizar nosotros:', error);
      res.status(500).send('Error al cargar la página');
    }
<<<<<<< HEAD
  }

=======
  },

crearparqueadero: (req, res) => {
    try {
      res.render('crearparqueadero', { nombrePagina: 'Crear parqueaderos - ParkingPlus' });
    } catch (error) {
      console.error('Error al renderizar Crear parqueaderos:', error);
      res.status(500).send('Error al cargar la página');
    }
  }
  
>>>>>>> master
};

export default proyecto;