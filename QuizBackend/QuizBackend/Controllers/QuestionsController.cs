using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizBackend.Models;

namespace QuizBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {

        readonly QuizContext context;

        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Question question)
        {
            context.Questions.Add(question);
            context.SaveChanges();
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return context.Questions;
        }
    }
}