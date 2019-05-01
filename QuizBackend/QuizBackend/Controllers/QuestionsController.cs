using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

       
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Question question)
        {
            context.Questions.Add(question);
            await context.SaveChangesAsync();
            return Ok(question);
        }

        
        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return context.Questions;
        }
        [HttpGet("{quizId}")] //get questions of a particular quiz
        public IEnumerable<Question> Get([FromRoute] int quizId)
        {

            return context.Questions.Where(q => q.QuizId == quizId);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Question question)
        {
            if (id != question.ID)
            {
                return BadRequest(); // if id in the url != id of the question
            }
            //var existing = await context.Questions.SingleOrDefaultAsync(q => q.ID == id);
            context.Entry(question).State = EntityState.Modified;  //Entry track the the id of the model, not the id that we pass in 
            await context.SaveChangesAsync();

            return Ok(question);
        }
    }
}