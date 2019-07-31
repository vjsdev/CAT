export const apiData =  {
  AUDIT: [
    {percentage: 83, date: 'June 2019', step:1, text:['You haven\'t requested for an audit yet. You can click on below button to start with.'], lastUpdated:'3days', locked: false, action: 'Request for an audit'},
    {percentage: 83, date: 'May 2019', step:2, text: ['Waiting for auditor to access the audit request.', 'Vishnu Potti made the request on 11 March 2019.'], lastUpdated:'3days', locked: false },
    {percentage: 2, date: 'April 2019', step:3, text: ['Auditor accepted the audit request.', 'Gayathri is about to take a look at your project.'], lastUpdated:'3days', locked: false },
    {percentage: 46, date: 'March 2019', step:4, text: ['Review audit report'], lastUpdated:'3days', locked: false  },
    {percentage: 100, date: 'February 2019', step:5, text: ['Audit has been locked out due to inactivity.'], lastUpdated:'3days', locked: true},
    {percentage: 86, date: 'January 2019', step:6, text: ['Waiting for auditor to access the audit request.', 'Vishnu Potti made the request on 11 March 2019.'], lastUpdated:'3days', locked: false, action: 'Message to C.A.T admin',},
    {percentage: 100, date: 'December 2018', step:7, text: ['Congratulatons! You\'ve completed the audit process for this month.'], lastUpdated:'3days', locked: false  }
  ],
  PROGRESS: [
    {id: 1, title: 'Upload code for auditing'},
    {id: 2, title: 'Waiting for auditors response'},
    {id: 3, title: 'Waiting for audit report'},
    {id: 4, title: 'Review audit report'},
    {id: 5, title: 'Finalize audit report'},
    {id: 6, title: 'Waiting for aditor to accept the changes'},
    {id: 7, title: 'Completed'}
  ]
}
