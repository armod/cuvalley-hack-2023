import React, { useState, useEffect } from 'react'
import XLSX from 'xlsx'

const ExcelTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const file = document.getElementById('file-input').files[0]
      const reader = new FileReader()
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        const firstSheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[firstSheetName]
        const excelData = XLSX.utils.sheet_to_json(worksheet)
        setData(excelData)
      }
      reader.readAsArrayBuffer(file)
    }
    fetchData()
  }, [])

  return (
    <div>
      <input type='file' id='file-input' onChange={fetchData} />
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExcelTable
