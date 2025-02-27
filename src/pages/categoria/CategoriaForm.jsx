import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Grid, Box, Typography, FormLabel, OutlinedInput, FormControlLabel, Checkbox, Stack } from '@mui/material';
import { FormGrid } from '../../component/form/FormGrid';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

function CategoriaForm() {
    // Inicializa o react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Função chamada quando o formulário é submetido
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{ marginTop: 3 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Formulário de Cadastro
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <Grid container spacing={3}>
                        <FormGrid size={{ xs: 12, md: 6 }}>
                            <FormLabel htmlFor="first-name" required>
                                First name
                            </FormLabel>
                            <OutlinedInput
                                id="first-name"
                                name="first-name"
                                type="name"
                                placeholder="John"
                                autoComplete="first name"
                                required
                                size="small"
                            />
                        </FormGrid>
                        <FormGrid size={{ xs: 12, md: 6 }}>
                            <FormLabel htmlFor="last-name" required>
                                Last name
                            </FormLabel>
                            <OutlinedInput
                                id="last-name"
                                name="last-name"
                                type="last-name"
                                placeholder="Snow"
                                autoComplete="last name"
                                required
                                size="small"
                            />
                        </FormGrid>
                        <FormGrid size={{ xs: 12 }}>
                            <FormLabel htmlFor="address1" required>
                                Address line 1
                            </FormLabel>
                            <OutlinedInput
                                id="address1"
                                name="address1"
                                type="address1"
                                placeholder="Street name and number"
                                autoComplete="shipping address-line1"
                                required
                                size="small"
                            />
                        </FormGrid>
                        <FormGrid size={{ xs: 12 }}>
                            <FormLabel htmlFor="address2">Address line 2</FormLabel>
                            <OutlinedInput
                                id="address2"
                                name="address2"
                                type="address2"
                                placeholder="Apartment, suite, unit, etc. (optional)"
                                autoComplete="shipping address-line2"
                                required
                                size="small"
                            />
                        </FormGrid>
                        <FormGrid size={{ xs: 6 }}>
                            <FormLabel htmlFor="city" required>
                                City
                            </FormLabel>
                            <OutlinedInput
                                id="city"
                                name="city"
                                type="city"
                                placeholder="New York"
                                autoComplete="City"
                                required
                                size="small"
                            />
                        </FormGrid>
                        <FormGrid size={{ xs: 6 }}>
                            <FormLabel htmlFor="state" required>
                                State
                            </FormLabel>
                            <OutlinedInput
                                id="state"
                                name="state"
                                type="state"
                                placeholder="NY"
                                autoComplete="State"
                                required
                                size="small"
                            />
                        </FormGrid>
                        <FormGrid size={{ xs: 6 }}>
                            <FormLabel htmlFor="zip" required>
                                Zip / Postal code
                            </FormLabel>
                            <OutlinedInput
                                id="zip"
                                name="zip"
                                type="zip"
                                placeholder="12345"
                                autoComplete="shipping postal-code"
                                required
                                size="small"
                            />
                        </FormGrid>
                        <FormGrid size={{ xs: 6 }}>
                            <FormLabel htmlFor="country" required>
                                Country
                            </FormLabel>
                            <OutlinedInput
                                id="country"
                                name="country"
                                type="country"
                                placeholder="United States"
                                autoComplete="shipping country"
                                required
                                size="small"
                            />
                        </FormGrid>
                        <FormGrid size={{ xs: 12 }}>
                            <FormControlLabel
                                control={<Checkbox name="saveAddress" value="yes" />}
                                label="Use this address for payment details"
                            />
                        </FormGrid>
                    </Grid> */}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Nome"
                                variant="outlined"
                                {...register('nome', {
                                    required: 'Nome é obrigatório',
                                    minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' }
                                })}
                                error={!!errors.nome}
                                helperText={errors.nome?.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Código"
                                variant="outlined"
                                type="string"
                                {...register('codigo', {
                                    required: 'Código é obrigatório',
                                    minLength: { value: 5, message: 'Código deve ter pelo menos 5 caracteres' }

                                })}
                                error={!!errors.codigo}
                                helperText={errors.codigo?.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Descrição"
                                variant="outlined"
                                type="string"
                                {...register('descricao', {
                                    required: 'Descrição é obrigatória',
                                    minLength: { value: 10, message: 'Código deve ter pelo menos 10 caracteres' }

                                })}
                                error={!!errors.descricao}
                                helperText={errors.descricao?.message}
                            />
                        </Grid>

                        {/* Centralizando os botões */}
                        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                            <Stack direction="row" spacing={2}>
                                <Button color="success" variant="contained" startIcon={<SendRoundedIcon />} type='submit'>
                                    Enviar
                                </Button>
                                <Button variant="outlined" startIcon={<ClearRoundedIcon />} type="reset">
                                    Limpar
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
}

export default CategoriaForm;
