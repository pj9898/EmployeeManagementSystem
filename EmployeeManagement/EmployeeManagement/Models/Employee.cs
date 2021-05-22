using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeManagement.Models
{
    public class Employee
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string fullName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string role { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string mobile { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string manager { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string office { get; set; }

        [DataType(DataType.Date)]
       public DateTime joiningdate { get; set; }


    }
}
