sf.display.ImageDrum = function() {
  return [
    ' ',
    'SWA',
    'AAL',
    'BAW',
    'DAL',
    'UAE',
    'KLM',
    'DLH',
    'ASA',
    'UAL',
    'FDX',
    'PXM',
    'SKW',
    'JBU',
    'ACA',
    'QXE',
    'NKS',
    'VIR',
    'LXJ',
    'QFA'
  ];
};

sf.plugins.arrivals = {
  dataType: 'json',

  url: () => 'api/arrivals',
  // Local fallback derived from public/data/arrivals.csv so this board
  // can run directly from public/index.html in a browser.
  localData: () => [
    { airline: 'SWA', flight: 317, city: 'Atlanta', gate: 'A4', scheduled: '0725', status: 'A', remarks: '' },
    { airline: 'AAL', flight: 1842, city: 'Baltimore', gate: 'B12', scheduled: '0740', status: 'A', remarks: '' },
    { airline: 'BAW', flight: 219, city: 'London', gate: 'C3', scheduled: '0805', status: 'B', remarks: 'Delayed 20M' },
    { airline: 'DAL', flight: 913, city: 'Detroit', gate: 'A18', scheduled: '0815', status: 'A', remarks: '' },
    { airline: 'UAE', flight: 202, city: 'Dubai', gate: 'C9', scheduled: '0830', status: 'A', remarks: '' },
    { airline: 'KLM', flight: 645, city: 'Amsterdam', gate: 'B2', scheduled: '0855', status: 'A', remarks: '' },
    { airline: 'DLH', flight: 431, city: 'Frankfurt', gate: 'C11', scheduled: '0910', status: 'B', remarks: 'Delayed 35M' },
    { airline: 'ASA', flight: 772, city: 'Seattle', gate: 'A1', scheduled: '0900', status: 'A', remarks: '' },
    { airline: 'UAL', flight: 1503, city: 'Chicago', gate: 'B7', scheduled: '0915', status: 'A', remarks: '' },
    { airline: 'FDX', flight: 89, city: 'Memphis', gate: 'C14', scheduled: '0930', status: 'A', remarks: '' },
    { airline: 'PXM', flight: 505, city: 'Phoenix', gate: 'A9', scheduled: '0945', status: 'A', remarks: '' },
    { airline: 'SKW', flight: 3886, city: 'Denver', gate: 'B10', scheduled: '1000', status: 'A', remarks: '' },
    { airline: 'JBU', flight: 244, city: 'Boston', gate: 'C5', scheduled: '1015', status: 'A', remarks: '' },
    { airline: 'ACA', flight: 738, city: 'Toronto', gate: 'A7', scheduled: '1030', status: 'A', remarks: '' },
    { airline: 'QXE', flight: 2310, city: 'Portland', gate: 'B3', scheduled: '1045', status: 'A', remarks: '' },
    { airline: 'NKS', flight: 122, city: 'Las Vegas', gate: 'C6', scheduled: '1100', status: 'A', remarks: '' },
    { airline: 'VIR', flight: 14, city: 'Manchester', gate: 'B1', scheduled: '1115', status: 'A', remarks: '' },
    { airline: 'LXJ', flight: 507, city: 'San Diego', gate: 'A11', scheduled: '1130', status: 'A', remarks: '' }
  ],

  formatData: response => response.data
};
