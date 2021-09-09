import React, { useState } from 'react';

export const AuthPage = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const changeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	return (
		<div className='row'>
			<div className='col s6 offset-s3'>
				<h2>Сократи ссылку</h2>
				<div className='card teal darken-1'>
					<div className='card-content white-text'>
						<span className='card-title'>Авторизация</span>
						<div>
							<div className='input-field'>
								<input
									placeholder='Введите email'
									id='email'
									type='text'
									name='email'
									onChange={changeHandler}
									className='yellow-input'
								/>
								<label htmlFor='email'>Email</label>
							</div>
							<div className='input-field'>
								<input
									placeholder='Введите пароль'
									id='password'
									type='password'
									name='password'
									onChange={changeHandler}
									className='yellow-input'
								/>
								<label htmlFor='password'>Пароль</label>
							</div>
						</div>
					</div>
					<div className='card-action'>
						<button
							className='btn  brown lighten-1'
							style={{ marginRight: 10 }}
						>
							Войти
						</button>
						<button className='btn blue-grey lighten-2 black-text'>
							Регистрация
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
