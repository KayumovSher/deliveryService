import {format} from 'date-fns';
import { ColumnFilter } from './ColumnFilter';
export const COLUMNS = [
	{
		Header : 'ID Курьера',
		Footer : 'ID Курьера',
		accessor: 'id',
		Filter: ColumnFilter,
		//disableFilters: true,
	},
	{
		Header : 'Имя',
		Footer : 'Имя',
		accessor: 'first_name',
		Filter: ColumnFilter,
	},
	{
		Header : 'Фамилия',
		Footer : 'Фамилия',
		accessor: 'last_name',
		Filter: ColumnFilter,
	},
	{
		Header : 'Статус',
		Footer : 'Статус',
		accessor: 'status',
		Filter: ColumnFilter,
	},
	{
		Header : 'Дата рождения',
		Footer : 'Дата рождения',
		accessor: 'date_of_birth',
		Cell: ({ value }) => {return format(new Date(value), 'dd/mm/yyyy')},
		Filter: ColumnFilter,
	},
	{
		Header : 'Тел. номер',
		Footer : 'Тел. номер',
		accessor: 'phone',
		Filter: ColumnFilter,
	},
	{
		Header : 'Компенсация',
		Footer : 'Компенсация',
		accessor: 'compensation',
		Filter: ColumnFilter,
	},
]

export const GROUPED_COLUMNS = [
	{
		Header : 'Id',
		Footer : 'Id',
		accessor: 'id'
	},
	{
		Header : 'Имя',
		Footer : 'Имя',
		columns: [
			{
				Header : 'Имя',
				Footer : 'Имя',
				accessor: 'first_name'
			},
			{
				Header : 'Фамилия',
				Footer : 'Фамилия',
				accessor: 'last_name'
			},
		]
	},
	{
		Header: 'Инфо',
		Footer: 'Инфо',
		columns: [
			{
				Header : 'Дата рождения',
				Footer : 'Дата рождения',
				accessor: 'date_of_birth'
			},
			{
				Header : 'Статус',
				Footer : 'Статус',
				accessor: 'status',
			},
			{
				Header : 'Тел. номер',
				Footer : 'Тел. номер',
				accessor: 'phone'
			},
		]
	},
]