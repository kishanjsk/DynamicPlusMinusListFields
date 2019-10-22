using AddingRemovingRowInListJQuery.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using System.Diagnostics;

namespace AddingRemovingRowInListJQuery.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            Employee employee = new Employee()
            {
                Subjects = new List<Subject>() {
                    new Subject() {
                        Standers = new List<SelectListItem> (){
                            new SelectListItem() { Text = "Maths", Value = "1" },
                            new SelectListItem() { Text = "Science", Value = "2" },
                            new SelectListItem() { Text = "Physics", Value = "3" },
                            new SelectListItem() { Text = "Social Science", Value = "4" }
                        }
                    }
                }
            };
            return View(employee);
        }
        [HttpPost]
        public IActionResult Index(Employee employee)
        {
            // your code to fetch data from Employee;

            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

