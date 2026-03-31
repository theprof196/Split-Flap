/* global require console process Promise module */

const express = require('express'),
  fs = require('fs/promises'),
  path = require('path'),
  app = express();

const ARRIVALS_CSV_PATH = path.join(__dirname, 'public/data/arrivals.csv');
const ARRIVALS_COLUMNS = [
  'airline',
  'flight',
  'city',
  'gate',
  'scheduled',
  'status',
  'remarks'
];

function parseCsvLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
      continue;
    }

    current += char;
  }

  values.push(current.trim());

  return values;
}

function parseArrivalsCsv(content) {
  const lines = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return [];
  }

  const headers = parseCsvLine(lines[0]).map((header) => header.toLowerCase());

  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });

    return {
      airline: row.airline || '',
      flight: row.flight || '',
      city: row.city || '',
      gate: row.gate || '',
      scheduled: row.scheduled || '',
      status: row.status || 'A',
      remarks: row.remarks || ''
    };
  });
}

// ========================================================================
// API

app.use('/api/arrivals', async (req, res) => {
  try {
    const csvContent = await fs.readFile(ARRIVALS_CSV_PATH, 'utf8');
    const rows = parseArrivalsCsv(csvContent).map((row) => {
      const normalizedRow = {};

      ARRIVALS_COLUMNS.forEach((column) => {
        normalizedRow[column] = row[column] || '';
      });

      normalizedRow.status = row.status || 'A';
      normalizedRow.remarks = row.remarks || '';

      return normalizedRow;
    });

    res.json({ data: rows });
  } catch (error) {
    console.error('Unable to load arrivals CSV:', error);
    res.status(500).json({ data: [] });
  }
});

// ========================================================================
// STATIC FILES
app.use('/', express.static('public'));

// ========================================================================
// WEB SERVER
const port = process.env.PORT || 8080;
app.listen(port);
console.log('split flap started on port ' + port);
