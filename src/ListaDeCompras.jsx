import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Rating,
  Card,
  CardContent,
  IconButton,
  TextField,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ListaDeCompras.css';

const ListaDeCompras = ({ itens, valorTotalCompra, onQuantidadeChange, onRemoverItem }) => {
  const handleIncrement = (id, quantidade) => {
    onQuantidadeChange(id, quantidade + 1);
  };

  const handleDecrement = (id, quantidade) => {
    onQuantidadeChange(id, Math.max(quantidade - 1, 0));
  };

  return (
    <Box className="lista-de-compras-container">
      <Typography variant="h5" gutterBottom align="center" className="titulo">
        Lista de Compras
      </Typography>

      <List>
        {itens.map((item, index) => (
          <React.Fragment key={item.id}>
            <Card className="item-card">
              <CardContent>
                <ListItem alignItems="flex-start">
                  <IconButton
                    aria-label="remover"
                    onClick={() => onRemoverItem(item.id)}
                    className="remover-item-btn"
                  >
                    <CloseIcon />
                  </IconButton>
                  <ListItemAvatar>
                    <Avatar className="avatar-icon">
                      <ShoppingCartIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="h6" component="span">
                        {item.nome}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="text.primary" className="valor-unitario">
                          {item.descricao}
                        </Typography>
                        {' — '}
                        Valor unitário: R$ {item.valorUnitario.toFixed(2)}
                        <br />
                        Quantidade:
                        <Box className="quantidade-box">
                          <IconButton
                            size="small"
                            onClick={() => handleDecrement(item.id, item.quantidade)}
                            className="icon-button"
                          >
                            <RemoveIcon />
                          </IconButton>
                          <TextField
                            type="number"
                            size="small"
                            value={item.quantidade}
                            onChange={(e) => onQuantidadeChange(item.id, parseInt(e.target.value))}
                            className="quantidade-input"
                            inputProps={{ min: 0, style: { textAlign: 'center' } }}
                          />
                          <IconButton
                            size="small"
                            onClick={() => handleIncrement(item.id, item.quantidade)}
                            className="icon-button"
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>
                        <Typography component="span" fontWeight="bold" display="block" className="valor-total-item">
                          Valor total: R$ {(item.valorUnitario * item.quantidade).toFixed(2)}
                        </Typography>
                        <Box className="avaliacao">
                          <Rating name={`rating-${item.id}`} value={item.avaliacao} precision={0.5} readOnly size="small" />
                        </Box>
                      </>
                    }
                  />
                </ListItem>
              </CardContent>
            </Card>
            {index < itens.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>

      <Box className="valor-total-compra">
        <Typography variant="h6">
          Valor total da compra: R$ {valorTotalCompra.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

ListaDeCompras.propTypes = {
  itens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      valorUnitario: PropTypes.number.isRequired,
      quantidade: PropTypes.number.isRequired,
      avaliacao: PropTypes.number.isRequired,
    })
  ).isRequired,
  valorTotalCompra: PropTypes.number.isRequired,
  onQuantidadeChange: PropTypes.func.isRequired,
  onRemoverItem: PropTypes.func.isRequired,
};

export default ListaDeCompras;
