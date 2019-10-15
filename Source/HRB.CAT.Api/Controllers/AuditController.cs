using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRB.CAT.Common.Utilities;
using HRB.CAT.Dto.Models;
using Microsoft.AspNetCore.Mvc;

namespace HRB.CAT.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuditController : ControllerBase
    { 

        [HttpGet]
        public ActionResult<AuditListResponse> Get([FromQuery]AuditListRequest auditlListRequest)
        {
            // Get the data from database and process
            // send the response
            return new AuditListResponse
            {
                Audits = new List<AuditInfo> {
                    new AuditInfo {
                        AuditId = 110,
                        AuditName = "March 2000",
                        AuditorComment = "Initiating the audit for GUA project for month of march",
                        AuditScore = 70,
                        AuditStatus = "INITIATED",
                        AuditStatusMessage = "Waiting for auditor to access the audit request.", //Decided based on users role
                        GeneralRatings = new List<RatingInfo>{
                            new RatingInfo {
                                Comment = "",
                                Rating = 0,
                                Title = "Documentation"
                            },
                            new RatingInfo {
                                Comment = "",
                                Rating = 0,
                                Title = "Testability"
                            },
                            new RatingInfo {
                                Comment = "",
                                Rating = 0,
                                Title = "Security"
                            }
                        },
                        History = new List<AuditHistoryInfo>{
                            new AuditHistoryInfo {
                                ActivityDetails = "Initiated by vipin.john on 21 Jan 2000",
                                ActivityTime = DateTime.Now
                            },
                            new AuditHistoryInfo {
                                ActivityDetails = "Request is waiting to get accepted by auditor1",
                                ActivityTime = DateTime.Now
                            }
                        },
                        IsLocked = false,
                        Observations = new List<RatingInfo>{ },
                        ProjectId = 101,
                        RequestorComment = "Requesting to complete this audit ASAP"
                    }
                }
            };
        }

        [HttpPut]
        public ActionResult<AuditInfo> Update([FromBody]AuditUpdateRequest auditUpdateRequest) {

            return auditUpdateRequest.Audit;
        }
    }
}
