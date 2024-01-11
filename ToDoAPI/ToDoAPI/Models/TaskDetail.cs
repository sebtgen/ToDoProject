using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ToDoAPI.Models
{
    public class TaskDetail
    {
        [Key]
        public int TaskDetailId { get; set; }

        [Column (TypeName = "nvarchar(MAX)")]
        public string TaskDescription { get; set; } = "";

    }
}
