import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const devicesData = {
  Laptop: {
    Dell: {
      "Inspiron 15": { price: 30000, image: "https://d2xamzlzrdbdbn.cloudfront.net/products/2ebf2286-0239-4ed4-951a-34cb6201926b24171029_416x416.jpg" },
      "XPS 13": { price: 90000, image: "data:image/jpeg;base64,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" },
      "Latitude 14": { price: 70000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtM_KtYq5TlBl7eZ0ltJactEpun3Jt1RYRTg&s" },
    },
    HP: {
      "Pavilion": { price: 45000, image: "data:image/jpeg;base64,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" },
      "Spectre x360": { price: 110000, image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTERMTFhUWFhkSFRUSGBMYEhYXFxgXGBcSFxYYHigiGBslHRUTITEiJTUtLi4uFx8zODMsOCgtLisBCgoKDg0OGBAQGC0dIB0uKy0rLSstLS0tLy0yLS0vLS0tLS0tKy0tKy0uKy04LS0tLS0tKystNy0tLSstLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQIDCAH/xABHEAABAwIDAwkEBgcGBwEAAAABAAIDBBEFEiExQXEGBxMiUWGBkaEyUpKxIzNCYnKCCBRjwdHh8ENTk7LCwxVEZKKks/Ek/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECBAMGBf/EACERAQEBAQABAwUBAAAAAAAAAAABEQIDEiGBBDFRYXFB/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQa3lLiJp6SonFrxQyStB2FzGEtHiQFRmD84mNtY14LaljgXCzGPJtq5pEWrSL3LbaDuVp88NV0eD1Z95jY/jkY0+hK8xcn8clpJWyRnQEOLCTlJGw9xGtj3ncSDLuewuzDOfAXy1NKQd5ifs/I4X9VMMM50MMmsOmMZO6Zpb6i49VFclNiFH0sbWljhmykDNE77bO7XW3loQoxgnJelkeYpmuBBtmjcQbbjY3Houfj6mdXLMr1vismyr6osShmF4ZY5PwOa75FZSpWbmmeOtSVhB2gStLTfd9JGdPhXS6PH6EXEr5GjbZ7ZmeDX9b0XtPJx+Xn6b+F4IqVwrnhqR9dFFKN5YSx37x6KVYbzs0T7CVksR7SA9g8W6+i2iwEWnw7lTRT/VVMR7i4Nd8LrFbcFB9REQEREBERAREQEREBERAREQEREBERAREQVh+kNWZMMawf2tQxh4Na9/zaF5rV8fpLVdo6OL3nSyH8oY0f53eSodBMebTlWaKpDZHfQSkNkB9lp2CXw2HuJ7ArHxRn6tWN9x2rT2tds8jp4Kh1a2E4kazCQSbz0Lgxx+0YXew48Dp+Url83jzqeSfL28fXteV04PPdgWRiMN2lR3kVW9LAx/aB/NS17bhXzeH2uMcdvJ/KGgMNdUxC4s5zhbTQ9YW+JbfAqFwopZ5buc52SAEnQM1kl26j7Ou8La86ND0eIufszwWHZmLsgv8QPguqlr2yxTtj+rgpTGzv1bmfxJUnfXXHOfPw1knV1EouUBHtMB7wbfNbzC+Wr4vqqieLuDn5fIEhQdF1PJduFc6taNskM4++1t/OMhSqg53YzYT0z29picHDydZeaQVlQ4jK3Y93jqPIoPWOH8v8OlsBUBhO6YOZ5ucMvqpFT1LHi8b2vHawhw8wvHMXKB49prXcLgqx+ZnEHyV0fRXa05myA7C0Mc75gIPQiIiAiIgIiICIiAiIgIiICIiAiIg86/pH1RdXwR7mUwd+Z8kl/RjFUyn3PjWGTGJxujbHEP8Nrj6vKgKAphzXV2Wt6Bx+jq430r+y7x9GbducNH5ioeu6jqXRyMkb7THNe3i0gj1Cz1z6pYsuXV+81NQRHJE7bFI5h+f71Z8R0VWckZGjE6xrPYkyVDLbLStDx/mU55S4yKOjmqNpjYS0drtjR52XrPfxzXPLnk6n7Uhz14wyavMLPZg6jyN8m1wv924HHMtByVlyx1bO2nf6Fp+S2fIzkc+viqqh5JyhwaTtdKRnc49u0eZUWpKgsLj70TmHxaWn5LPPE5mPW9bWrREUaEREBXV+j1SXmc/3Y3nxLmgehKpVejOYKjy08r7bmM8sxPzagtdERAREQEREBERAREQEREBERARFxkeGgk7ACT4IPIHOHVdLida/wD6iRvgxxYP8qjq762pMkj5HbXvc88XEk/NdCAiIgujkLKP1uncPt4dT34xl8XyjClfOe7pKYU/9619idGhwH0eY7gXaX3XUA5AykPo3E/8mR/5lWB6BbvnfrHGKJrXEZi0EtJB2uNr/lC983xuK+STzWfxJ+aagMFCIZAA/O5x789iNvcbeCo7lvh36vWVEW5sri38L+uPmR4KUciucCSmkENQczQcocbA290k7+wnTcbbR1c8QZJURVMRzMmi2jTrRkggg6h3WsQdRZY2Wfx6yXnrb/qt0RF5ugREQco23IHabL1VzP0mTDwffeXfCGst5td5ry5h0eaVg7XBevOQtN0dBTt7WZ/8Ql/+pEb5ERFEREBERAREQEREBERAREQFp+WVX0NBVyjaynlcPxCN2UedluFCeeeqMeD1RG1wjj8HysDv+0uQeUkREBERBbXIqmsyE+7TMHxyTS/7oTnPkPRRH3Xt+Z/itpyTpskTb7ckbTxbG0H1BWr5zWXp2n7y68zh8/z5d+s383FbY0zr3G8XXbDXmSMRSON2m7Cdh0tld32AAPcBuC6aqTNGO0LXrl6+793j25yvrmkGx2hfF3E5uO7v7v6/gulRsREQbTk3FmqGd2o8F7IoYMkbGD7DGs+EAfuXlHmwo+krom2uC9gPAvaD6XXrVAREQEREBERAREQEREBERARFi1uIwxC8sjGD7xAPgNpQZSgHPLj76KlgmYwPtVNu118hHRymxt328lsMQ5waZmkTXyntAyM83a+ihfK7lz+sUz4nwNLCRqwnMwg3BuQRfTs1F1cqeqIrHi/J2vFqqnfQzH+0g+ruT9wW8SwcVjYjzPzOZ02G1MFZFqQGua2S24XuWE8SOC0cmFQSnMBprcNtG70zDTttqsRtBPTO6SjnkY++gaXRyW7nNOVw4kE9iqa1OL4JU0rslTDJEdnXaQD+F2x3gsSkhzvYz3nBvmQFYmH869YwdDiEEVVGdHCVga8jv0yu8W69q2mHP5O1crJWF9DOHZsj+rCSNm27ANmwt2bEkh1bJcSOhFmjzWm5cxZ6Z3cbqWT4K9gBY5kjSLtLCLkaC4vofabsJ2qOcoIz0T2PBBsdHAg+RXZcsfLTjvxeSXqZ7qVzbl0ruqm2cR3rpXC+qj6Cucmuo8eK61yjdbbsOhRXFF9c2xsviCzuYejz17HbmlzjwDHf6ixelVRf6OtH15ZbbI3Dxe9oH/rd6q9ESCIiKIiICIiAi4SytaMznBoG0uIAHiVH8Q5bUcegeZD2RC4+I2b6oakaKua3nBldpDG1g7X3c7jbQD1WjrMXnm+tle4e7ezfhGi1OWb1Fm1/KKlivnlaSPss6zuFm7PFRrEecMC/QxH8UpsPhH8VDQsSow9rjmDnsd7zXE+jrha9KeqtnX8tKma4E1vuQ2Z4X2+pUaqMQuLk5XftATf817ErhU4fI25yiQ++C/OO3q3+RKxTrZrXukuBnaQWWPuk7/FGfu5TzOdY2c0bM3Xy+RH8Fjujzew0PA1L2hxPHU7PNfXkXs4hltjDmcDuXx7b9Z7S1v7MAXt2/wBbkV1PY17zv02vLY3AgbdBt4jf4rDew6OuC4aAOaHAX3XII/8Aiynat+xkH4A5DJfqtc5rNtnnbpt0CDGnLDdssZbw6zPheb+Id4LXz8n2P1iN9/0dyfGM2d5ad62zHi+mVgsGuNswI330/qy6TTAg5QSRrmBsLfhP7kxdarD6uuoyTTTPaN4YbsP4o3aHxBUyo+dU5GxVsMczSwXdG2zmECwDo5LtcRt6patIZHl2XSbT7QJfsvbMLPFuy9tN6x5aeGTR3VP7QZh8bBceXip7z7FyzKkzOTWCYjc0lX+rTOJtFJfLtJAyym5dbblcR2BR/H+azEaa5bGJ2DXNT9Z1u+M2d5ArTVnJ8gZmmze3R0fDO3ZwOqzcH5VYnQ2EUz+jbsY/6SG3YAfZHCyn9WfpF5Y3NJa4FrhoQ4EEHsIOxcFbVNznUNWAzF6Bjt3Swi5F9pAcQ9n5XHgu53NthdeC7CK8B3tdDKc1h2ZSBI0d5DlMXVQ7Rw+S4qW49zdYlSXL4DIwbXwfSMt2kDrNHEBRO2uiivR/MBSZaOR/aWN8ml/+6FaahvNLRiPDo7D23vd8J6MekYUySpBERFEREBERBFOWPJA1jhIyUte1uUNfcxHUndq066kX2DRVximCz0xtPGWi9g8axng4aeB1V5LjIwOBDgCDoQRcEdhCsuM3nVERLJYrDxfkHBJd0B6F3Y0XiP5N35bcFC8VwOoptZozk/vI+tH4na3xAW5YzebGGi+NIOoXJaZfFjVVGx/tNuRsOxw4EarJJXWSg0k2FOaPoyCOx2h8wNfEeK1ssYBAILTuDtnhu8lKZCsKpYCLEAjvWV1onAF2aQHTfGACuBu4ZnEOaLDK5wB8htWTPTW9g27jq3+SwZX+83Xt3ee1FM979bK3blJJv4ri5txo3KNmbrWJXbK5xDQX5xbRrb3F/D5LrcLm2rR2G/y/mg+jM4BjBmAJIytF9bC9/JfCGnqNF72uZbXB7QdtlxdrsAAA2svw2o06ENAIO8gbt9ztQdeQscOjc5rxoS0i3EOadn9ar7K+2kjGnfmis027eqMpHEXX24As0m/ZYei5hxj11DjY5gR2HQ+fYisCbDIZL5S2/Y60b/O5ad2+/csD/gThq2TK4G7c9wO6z23yuv7wAGmq34pLgmweTr1DZwPZlsL+Xiug527xwdofNTDWRhvL3FqLKZXdNHsaaj6RpHYydpzbjsd4LaYpy0oMQjIlogyrcWBkgDSLh7LuMos89TObOB13qPMcxzjnu1pH2Wtcb3GpBIzaX3hTPkBzZsq3ip6WMQtcW3iL85cBq0se0ZTYjtGul1FXTyPpujoaZp0PRMceLhmPq4rcLhFGGtDRsAAHAaBc1loREQEREBERAREQEKIgjONciqaa7o7wSHXNFYNJ+9GeqfCxPaoRi3J2sprl8fTRj+1gBJA7Xx7RxFwrdRWdWJeZVFxTtfq1wPbbaOI3LkSrSx7kdSVRzuYWS7pYTlk8dzvEFQjGOR1XBcsH6wztjFpQO+Pf+W63OmLzUeeVjSrt6UG4G0aEHQg7wRuXTKVWWFOFr5mrZSrBmao01z22N23HBBUm95Bn469wGU6bF2ytWO5qDIidmvldlG8X17tOzhdLDrNAvbUubc+ObbbisUOFrFoPfscOBH77rk2oLfZ1FrdYC47rhBkMgNrixHEZuNt665nxjVpdm7Dr5OWNZ7zoONtB4/zW6wHkfVVX1Ub3jZmbYRjjI6zfAXKitLJVkm4AHBco6OSQi4NzsvfMeA2nwVv4BzRtbZ1VLb7kG3gZXi/kBxVgYPgFLSi1PCxh3u2vPF7ruPiVNXFJYHzX1sxaSwRM2udUXabdjYm9a/4svirk5IcnGUMHQscX3cZHOIDRmIA0aNgs0dq547yopKT6+Voda4jb1pTwYNfE6KvsX50KiV3RUMOQu0aXN6Wod+GJlw07Nubgpq5i2kVcch8BxMVIqquV7WkEPjlkL5JAQQBkb1IwDldprpsF1Y6iiIiAiIgIiICIiAiIgIiICIiDUY3ybpqofTRjNsEjerKPzDbwNwoBjnN9UxXdTuE7PdNmzD/S/wBOCtZFZcSx50qWFrix7XNcNHNeC1w4g6hYUgXojF8Fp6luWeJr7bCdHt/C4ajwVeY/zYSNu6jkDxt6OUgP4NeNHcDbiVr1M+lWEjVjvapnT8ga+RwaIctxcukIa1vcdpJ/CCplgnNVCyzqqR0jt7I7sj4F3tHiMvBNMU7S4fJK4MjY5zjsa0EuPBo1KnGBc1NTLZ05bC37/Wk8I2mw8XeCuTDcMhp25IImRt3hgAv3k7Se8rLWdXEUwTm+oaexMfTOGuaazgODAA0eV+9SkkNGtg0DuAAHyC0XK7lEaSP6KGWeZ3sRxMe+27O/KDZvqfMisf8AguN4m76cOjjvf/8AReKMfhhaMziO8Dio0nWPc5NFT3bG4zvG6K2QH70h0twvwUIk5V4tiZLKRj2x3yn9X6rR3PqHWse4EHuUuwHmso4bOqM1S/8AadWEcIhoR+IuU5iia0BrQGtGgDQAAOwAbEFYYFzTm+etnvc3MVPcXO/PM7rOv3Bp02lWHhGC09M3JTxMjG/KOse9zjq48VnogIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//Z" },
      "Omen": { price: 85000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNI2jJ4qbfUutYTLHTqBzJ63nPdHbqBOGUg&s" },
    },
  },
  Phone: {
    Apple: { 
      "iPhone 12": { price: 55000, image: "https://via.placeholder.com/150?text=iPhone+12" },
      "iPhone 13": { price: 65000, image: "https://via.placeholder.com/150?text=iPhone+13" },
      "iPhone 14 Pro": { price: 120000, image: "https://via.placeholder.com/150?text=iPhone+14+Pro" },
    },
    Samsung: {
      "Galaxy S21": { price: 60000, image: "https://via.placeholder.com/150?text=Galaxy+S21" },
      "Galaxy A52": { price: 25000, image: "https://via.placeholder.com/150?text=Galaxy+A52" },
    },
  },
  Tablet: {
    Apple: {
      "iPad Air": { price: 50000, image: "https://via.placeholder.com/150?text=iPad+Air" },
      "iPad Pro": { price: 85000, image: "https://via.placeholder.com/150?text=iPad+Pro" },
    },
    Samsung: {
      "Galaxy Tab S7": { price: 65000, image: "https://via.placeholder.com/150?text=Galaxy+Tab+S7" },
      "Galaxy Tab A7": { price: 20000, image: "https://via.placeholder.com/150?text=Galaxy+Tab+A7" },
    },
  },
  TV: {
    Sony: {
      "Bravia 32": { price: 30000, image: "https://via.placeholder.com/150?text=Bravia+32" },
      "Bravia 55 OLED": { price: 150000, image: "https://via.placeholder.com/150?text=Bravia+55+OLED" },
    },
    LG: {
      "LG OLED CX": { price: 130000, image: "https://via.placeholder.com/150?text=LG+OLED+CX" },
      "LG NanoCell 4K": { price: 90000, image: "https://via.placeholder.com/150?text=NanoCell+4K" },
    },
  },
  GamingConsole: {
    Sony: {
      "PlayStation 5": { price: 60000, image: "https://via.placeholder.com/150?text=PS5" },
      "PlayStation 4": { price: 30000, image: "https://via.placeholder.com/150?text=PS4" },
    },
    Microsoft: {
      "Xbox Series X": { price: 65000, image: "https://via.placeholder.com/150?text=Xbox+Series+X" },
      "Xbox One S": { price: 25000, image: "https://via.placeholder.com/150?text=Xbox+One+S" },
    },
  },
};

const Calculator = () => {
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleDeviceChange = (index, field, value) => {
    const updatedDevices = [...selectedDevices];
    updatedDevices[index][field] = value;

    if (field === 'model') {
      const { device, brand } = updatedDevices[index];
      const { price, image } = devicesData[device][brand][value];
      updatedDevices[index].price = price;
      updatedDevices[index].image = image;
    }

    setSelectedDevices(updatedDevices);
    calculateTotal(updatedDevices);
  };

  const addDevice = () => {
    setSelectedDevices([
      ...selectedDevices,
      { device: '', brand: '', model: '', quantity: 1, price: 0, image: '' },
    ]);
  };

  const removeDevice = (index) => {
    const updatedDevices = selectedDevices.filter((_, i) => i !== index);
    setSelectedDevices(updatedDevices);
    calculateTotal(updatedDevices);
  };

  const calculateTotal = (devices) => {
    const total = devices.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
    setTotalAmount(total);
  };

  return (
    <>
    <Navbar/>
    <div className="container p-5">
      <h3 className="text-center mb-4">E-Waste Resell Value Calculator</h3>

      {selectedDevices.map((device, index) => (
        <div key={index} className="card mb-4">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-2">
                {device.image && (
                  <img
                    src={device.image}
                    alt={device.model}
                    className="img-fluid rounded"
                  />
                )}
              </div>

              <div className="col-md-2">
                <label className="form-label">Device</label>
                <select
                  className="form-select"
                  value={device.device}
                  onChange={(e) =>
                    handleDeviceChange(index, 'device', e.target.value)
                  }
                >
                  <option value="">Select Device</option>
                  {Object.keys(devicesData).map((deviceName) => (
                    <option key={deviceName} value={deviceName}>
                      {deviceName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-2">
                <label className="form-label">Brand</label>
                <select
                  className="form-select"
                  value={device.brand}
                  onChange={(e) =>
                    handleDeviceChange(index, 'brand', e.target.value)
                  }
                  disabled={!device.device}
                >
                  <option value="">Select Brand</option>
                  {device.device &&
                    Object.keys(devicesData[device.device]).map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                </select>
              </div>

              <div className="col-md-2">
                <label className="form-label">Model</label>
                <select
                  className="form-select"
                  value={device.model}
                  onChange={(e) =>
                    handleDeviceChange(index, 'model', e.target.value)
                  }
                  disabled={!device.brand}
                >
                  <option value="">Select Model</option>
                  {device.brand &&
                    Object.keys(devicesData[device.device][device.brand]).map(
                      (model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      )
                    )}
                </select>
              </div>

              <div className="col-md-2">
                <label className="form-label">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  value={device.quantity}
                  onChange={(e) =>
                    handleDeviceChange(index, 'quantity', parseInt(e.target.value) || 1)
                  }
                />
              </div>

              <div className="col-md-2 d-flex justify-content-end">
                <button
                  className="btn btn-danger"
                  onClick={() => removeDevice(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-primary" onClick={addDevice}>
          Add Device
        </button>
        <h4>Total Resell Value: ₹{totalAmount}</h4>
      </div>
    </div>
    </>
  );
};

export default Calculator;
