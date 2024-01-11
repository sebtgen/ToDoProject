using Microsoft.EntityFrameworkCore;

namespace ToDoAPI.Models
{
    public class TaskDetailContext : DbContext
    {
        public TaskDetailContext(DbContextOptions options) : base(options) 
        { 
        }

        public DbSet<TaskDetail> TaskDetails { get; set; }
    }
}
