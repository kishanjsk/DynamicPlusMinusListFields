using System.Collections.Generic;

namespace AddingRemovingRowInListJQuery.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Subject> Subjects { get; set; }
    }
}
