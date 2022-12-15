import { Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [editando, setEditando] = useState(false);

  const [nombre, setNombre] = useState('');
  const [img, setImg] = useState('');

  function save() {
    console.log('Nombre: ', nombre);
    setEditando(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setNombre('Esteban Fernandez');
      setImg(
        'data:image/jpeg;base64,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'
      );
    }, 3000);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Perfil</h1>
      <img
        style={{
          borderRadius: 125,
        }}
        src={img}
        alt=""
        width={240}
        height={240}
        className={loading ? 'skeleton' : ''}
      />
      {editando ? (
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          type="text"
          placeholder="Nombres"
        />
      ) : (
        <Typography className={loading ? 'skeleton' : ''}>{nombre}</Typography>
      )}

      <Button
        variant="contained"
        color={editando ? 'primary' : 'secondary'}
        onClick={() => (editando ? save() : setEditando(true))}
      >
        {editando ? 'Guardar' : 'Editar'}
      </Button>
      {/* {editando ? (
        <Button variant="contained" color="primary" onClick={() => save()}>
          Guardar
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setEditando(true)}
        >
          Editar
        </Button>
      )} */}
    </div>
  );
}

/*
  FOTO
  NOMBRES
  APELLIDOS
  EDAD
  FECHA DE NACIMIENTO
  DNI
  COSA FAVORITA
*/
