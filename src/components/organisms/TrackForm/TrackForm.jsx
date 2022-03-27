import React from 'react'
import NumberFormat from 'react-number-format'

import './TrackForm.scss'
import flagMX from 'Images/mx.svg'
import { useSnackbar } from 'notistack'

import SubmitButton from '../../atoms/Button/Button'
import { CheckBox } from '../../atoms/CheckBox/CheckBox'
import { CurrencyInput } from '../../atoms/CurrencyInput/CurrencyInput'

function TrackForm({ inputValue, setInputValue, children, onSubmit }) {
  const [showTag, setShowTag] = React.useState({})
  const [openCurrency, setOpenCurrency] = React.useState(false)
  const [selectedCurrency, setSelectedCurrency] = React.useState({
    code: 'MXN',
    flag: flagMX,
  })
  // const { enqueueSnackbar } = useSnackbar();
  React.useEffect(() => {
    setInputValue({
      ...inputValue,
      currency: selectedCurrency.code,
    })
  }, [selectedCurrency])

  const onChange = (e) => {
    const value = e.target.value

    setInputValue({
      ...inputValue,
      [e.target.name]: value,
    })
  }

  const handleSalary = (events) => {
    const intValue = events.floatValue

    setInputValue({
      ...inputValue,
      offeredSalary: intValue,
      currency: selectedCurrency.code,
    })
  }

  const handleFocus = (e) => {
    let bool = false

    if (e.nativeEvent.type === 'focusin') {
      bool = true
    } else {
      bool = false
    }

    setShowTag({
      ...showTag,
      [e.target.name]: bool,
    })
  }

  const onCurrencyClick = (e) => {
    e.preventDefault()
    setOpenCurrency(!openCurrency)
  }

  const handleCreateVacacySuccess = () => {
    enqueueSnackbar(t('The vacancy  was registered successfully'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      TransitionComponent: Zoom,
    })

    //xsetOpen(false);
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        {(!!inputValue.company || !!showTag.company) && (
          <label className="form-group__label">Company</label>
        )}
        <input
          id="company"
          className="form-control"
          type="text"
          name="company"
          placeholder="Company"
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          value={inputValue.company || ''}
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        {(!!inputValue.position || !!showTag.position) && (
          <label className="form-group__label">Position</label>
        )}
        <input
          id="position"
          className="form-control"
          type="text"
          name="position"
          placeholder="Position"
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          value={inputValue.position || ''}
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        {(!!inputValue.link || !!showTag.link) && (
          <label className="form-group__label">Link</label>
        )}
        <input
          id="link"
          className="form-control"
          type="text"
          name="link"
          placeholder="Link"
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          value={inputValue.link || ''}
          autoComplete="off"
        />
      </div>

      <div id="locationContainer" className="form-group">
        {(!!inputValue.location || !!showTag.location) && (
          <label className="form-group__label">Location</label>
        )}
        <input
          id="location"
          className="form-control"
          type="text"
          name="location"
          placeholder="Location"
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          value={inputValue.location || ''}
          autoComplete="off"
        />
        <CheckBox setInputValue={setInputValue}/>
      </div>

      <div id="salaryContainer" className="form-group">
        {(!!inputValue.offeredSalary || !!showTag.offeredSalary) && (
          <label className="form-group__label">Offered Salary</label>
        )}
        <NumberFormat
          id="offeredSalary"
          className="form-control"
          type="text"
          name="offeredSalary"
          placeholder="Salary"
          onFocus={handleFocus}
          onBlur={handleFocus}
          value={inputValue.offeredSalary || ''}
          autoComplete="off"
          onValueChange={handleSalary}
          thousandSeparator={true}
          prefix={'$'}
        />
        <div id="currencyInput">
          <CurrencyInput
            onCurrencyClick={onCurrencyClick}
            openCurrency={openCurrency}
            setOpenCurrency={setOpenCurrency}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
          />
        </div>
        {/* {!!openCurrency && (
            <Modal
              openCurrency={openCurrency}
              setOpenCurrency={setOpenCurrency}
            >
              <CurrencySelector />
            </Modal>
          )} */}
      </div>

      {children}

      <div className="form-group">
        {(!!inputValue.notes || !!showTag.notes) && (
          <label className="form-group__label">Notes</label>
        )}
        <textarea
          id="notes"
          className="form-control large-input"
          type="text"
          name="notes"
          placeholder="Notes"
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          value={inputValue.notes || ''}
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <SubmitButton value="Send" />
      </div>
    </form>
  )
}

export { TrackForm }
