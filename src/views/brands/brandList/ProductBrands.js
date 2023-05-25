import React, { useCallback, useEffect, useMemo, useState } from 'react'
import MaterialReactTable from 'material-react-table'
import * as Yup from 'yup'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  InputLabel,
} from '@mui/material'
import {
  CToast,
  CToastClose,
  CToastBody,
  CModalFooter,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from '@coreui/react'
import { Delete, Edit } from '@mui/icons-material'
import PropTypes from 'prop-types'

const Brands = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [tableData, setTableData] = useState([])
  const [validationErrors, setValidationErrors] = useState({})
  const [isSuccessToastOpen, setIsSuccessToastOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const fetchData = useCallback(async () => {
    try {
      // Make an API request to fetch data from the Oracle database
      const response = await fetch('http://localhost:8080/brands/all', {
        method: 'GET',
      })
      if (response.ok) {
        const data = await response.json()
        setTableData(data)
      } else {
        console.error('Failed to fetch data from the Oracle database')
      }
    } catch (error) {
      console.error('Error occurred while fetching data:', error)
    }
  }, [])
  useEffect(() => {
    fetchData()
  }, [fetchData])
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    contact: Yup.string().required('Contact is required'),
    location: Yup.string().required('Location is required'),
  })
  const [setHasErrors] = useState(false)
  const handleCreateNewRow = async (values) => {
    try {
      await validationSchema.validate(values, { abortEarly: false })
      // Make an API request to create a new row
      const response = await fetch('http://localhost:8080/brands/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      if (response.ok) {
        const text = await response.text()
        const newProduct = text ? JSON.parse(text) : {}
        const newTableData = [...tableData, newProduct]
        setTableData(newTableData)
        setCreateModalOpen(false)
        fetchData()
      } else {
        console.error('4444444444')
        setHasErrors(true)
      }
    } catch (error) {
      console.error('Error occurred while creating a new row:', error)
      console.log(error)
    }
  }

  const handleSuccessToastClose = () => {
    setIsSuccess(false)
  }
  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      try {
        // Make an API request to update a row
        const response = await fetch(`http://localhost:8080/brands/update/${row.original.name}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
        if (response.ok) {
          tableData[row.index] = values
          setTableData([...tableData])
          exitEditingMode()
          setIsSuccess(true)
        } else {
          console.error('Failed to save row edits')
        }
      } catch (error) {
        console.error('Error occurred while saving row edits:', error)
      }
    }
  }

  const handleDeleteRow = useCallback(
    async (row) => {
      if (!window.confirm(`Are you sure you want to delete ${row.original.name}?`)) {
        return
      }
      try {
        const response = await fetch(`http://localhost:8080/brands/delete/${row.original.name}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          tableData.splice(row.index, 1)
          setTableData([...tableData])
          showDeleteToast()
        } else {
          console.error('Failed to delete a row')
        }
      } catch (error) {
        console.error('Error occurred while deleting a row:', error)
      }
    },
    [tableData],
  )
  const StaticBackdrop = () => {
    const [visible, setVisible] = useState(false)
    return (
      <>
        <StaticBackdrop />
        <CButton onClick={() => setVisible(!visible)}>Launch static backdrop modal</CButton>
        <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Modal title</CModalTitle>
          </CModalHeader>
          <CModalBody>
            I will not close if you click outside me. Don&#39;teven try to press escape key.
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary">Save changes</CButton>
          </CModalFooter>
        </CModal>
      </>
    )
  }
  const showDeleteToast = () => {
    setIsSuccessToastOpen(true)
  }

  const handleDeleteToastClose = () => {
    setIsSuccessToastOpen(false)
  }
  CreateNewAccountModal.propTypes = {
    open: PropTypes.bool.isRequired,
    columns: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  const handleCancelRowEdits = () => {
    setValidationErrors({})
  }
  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === 'email'
              ? validateEmail(event.target.value)
              : cell.column.id === 'age'
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value)
          if (!isValid) {
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            })
          } else {
            delete validationErrors[cell.id]
            setValidationErrors({
              ...validationErrors,
            })
          }
        },
      }
    },
    [validationErrors],
  )

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: true,
        enableEditing: false,
        enableSorting: true,
        size: 80,
      },
      {
        accessorKey: 'name',
        header: 'NAME',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'string',
        }),
      },
      {
        accessorKey: 'location',
        header: 'LOCATION',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'string',
        }),
      },
      {
        accessorKey: 'contact',
        header: 'CONTACT',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'number',
        }),
      },
    ],
    [getCommonEditTextFieldProps],
  )
  return (
    <>
      <CToast
        autohide={true}
        visible={isSuccessToastOpen}
        color="success"
        className="text-white align-items-center"
        style={{ position: 'fixed', right: '20px', top: '70px', zIndex: '10000' }}
        onClose={handleDeleteToastClose}
      >
        <div className="d-flex">
          <CToastBody>Row deleted successfully!</CToastBody>
          <CToastClose className="me-2 m-auto" onClick={handleDeleteToastClose} />
        </div>
      </CToast>
      {isSuccess && (
        <CToast
          autohide={true}
          visible={true}
          color="success"
          className="text-white align-items-center"
          style={{ position: 'fixed', right: '20px', top: '70px', zIndex: '10000' }}
          onClose={handleSuccessToastClose}
        >
          <div className="d-flex">
            <CToastBody>Data submitted successfully.</CToastBody>
            <CToastClose className="me-2 m-auto" white />
          </div>
        </CToast>
      )}

      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 70,
          },
        }}
        columns={columns}
        data={tableData}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Tooltip arrow placement="bottom" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="bottom" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button color="info" onClick={() => setCreateModalOpen(true)} variant="contained">
            Create New Brand
          </Button>
        )}
      />
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  )
}

export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = ''
      return acc
    }, {}),
  )
  const [isSuccess, setIsSuccess] = useState(false)
  const [hasErrors, setHasErrors] = useState(false)
  const handleSubmit = async () => {
    const errors = {}
    columns.forEach((column) => {
      if (column.accessorKey !== 'id' && !values[column.accessorKey]) {
        errors[column.accessorKey] = 'Field required'
      } else if (column.accessorKey === 'contact' && !/^\d{10}$/.test(values[column.accessorKey])) {
        errors[column.accessorKey] = 'Must contain exactly 10 numbers'
      } else if (
        ['contact'].includes(column.accessorKey) &&
        isNaN(Number(values[column.accessorKey]))
      ) {
        errors[column.accessorKey] = 'Must be a number'
      } else if (
        ['name', 'location'].includes(column.accessorKey) &&
        !/^[A-Za-z0-9- ]+$/.test(values[column.accessorKey])
      ) {
        errors[column.accessorKey] = 'Must contain only letters and spaces'
      }
    })
    setValidationErrors(errors)
    if (Object.keys(errors).length === 0) {
      await onSubmit(values)
      onClose()
      setIsSuccess(true)
      setValues(
        columns.reduce((acc, column) => {
          acc[column.accessorKey ?? ''] = ''
          return acc
        }, {}),
      )
    } else {
      setHasErrors(true)
    }
  }
  const [validationErrors, setValidationErrors] = useState({})
  const handleSuccessToastClose = () => {
    setIsSuccess(false)
  }
  const handleErrorToastClose = () => {
    setHasErrors(false)
  }
  return (
    <>
      {isSuccess && (
        <CToast
          autohide={true}
          visible={true}
          color="success"
          className="text-white align-items-center"
          style={{ position: 'fixed', right: '20px', top: '70px', zIndex: '10000' }}
          onClose={handleSuccessToastClose}
        >
          <div className="d-flex">
            <CToastBody>Data submitted successfully.</CToastBody>
            <CToastClose className="me-2 m-auto" white />
          </div>
        </CToast>
      )}
      {hasErrors && (
        <CToast
          autohide={true}
          visible={true}
          className="text-white align-items-center"
          style={{ position: 'fixed', right: '20px', top: '70px', zIndex: '10000' }}
          color="danger"
          onClose={handleErrorToastClose}
        >
          <div className="d-flex">
            <CToastBody>Please fix all the errors</CToastBody>
            <CToastClose className="me-2 m-auto" white />
          </div>
        </CToast>
      )}
      <Dialog open={open}>
        <DialogTitle textAlign="center">Create New Brand</DialogTitle>
        <DialogContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <Stack
              sx={{
                width: '100%',
                minWidth: { xs: '300px', sm: '360px', md: '400px' },
                gap: '1.5rem',
              }}
            >
              {columns
                .filter((column) => column.accessorKey !== 'id')
                .map((column) => (
                  <FormControl
                    key={column.accessorKey}
                    error={!!validationErrors[column.accessorKey]}
                  >
                    {column.accessorKey === 'condition' ? (
                      <FormControl fullWidth>
                        <InputLabel>SELECT CONDITION</InputLabel>
                        <Select
                          value={values[column.accessorKey]}
                          onChange={(e) =>
                            setValues({ ...values, [column.accessorKey]: e.target.value })
                          }
                          fullWidth
                        >
                          <MenuItem value="">Select Condition</MenuItem>
                          <MenuItem value="New">New</MenuItem>
                          <MenuItem value="Used - Like New">Used - Like New</MenuItem>
                          <MenuItem value="Used">Used</MenuItem>
                        </Select>
                      </FormControl>
                    ) : column.accessorKey === 'warranty' ? (
                      <FormControl fullWidth>
                        <InputLabel>SELECT WARRANTY</InputLabel>
                        <Select
                          value={values[column.accessorKey]}
                          onChange={(e) =>
                            setValues({ ...values, [column.accessorKey]: e.target.value })
                          }
                          fullWidth
                        >
                          <MenuItem value="">Select Warranty</MenuItem>
                          <MenuItem value={1}>1 Year</MenuItem>
                          <MenuItem value={2}>2 Years</MenuItem>
                          <MenuItem value={3}>3 Years</MenuItem>
                        </Select>
                      </FormControl>
                    ) : (
                      <TextField
                        label={column.header}
                        name={column.accessorKey}
                        type={column.type === 'number' ? 'number' : 'text'}
                        value={values[column.accessorKey]}
                        onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                      />
                    )}
                    {validationErrors[column.accessorKey] && (
                      <FormHelperText>{validationErrors[column.accessorKey]}</FormHelperText>
                    )}
                  </FormControl>
                ))}
            </Stack>
          </form>
        </DialogContent>
        <DialogActions sx={{ p: '1.25rem' }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button color="info" onClick={handleSubmit} variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
const validateRequired = (value) => !!value.length
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
const validateAge = (age) => age >= 18 && age <= 50

export default Brands
