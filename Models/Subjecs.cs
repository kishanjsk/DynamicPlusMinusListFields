using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace AddingRemovingRowInListJQuery.Models
{
    public class Subject
    {
        public int Id { get; set; }
        public string SubjectName { get; set; }
        public bool IsActive { get; set; }
        public List<SelectListItem> Standers { get; set; }
    }
}
