import '../../styles/Tasks.scss';

export default function Tasks({ tasks }) {
	return (
		<div className="card">
			<h4 className="card-header">Assessment</h4>
			<div className="card-body">
				<div className="accordion" id="accordionExample">
					{tasks.map(task => (
						<div className="accordion-item" key={task.id}>
							<h2 className="accordion-header">
								<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse_${tasks.indexOf(task)}`} aria-expanded="false" aria-controls="collapseOne">
									{task.name} <span className="time">{task.dueDate.split(',')[0]}</span>
								</button>
							</h2>
							<div id={`collapse_${tasks.indexOf(task)}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
								<div className="accordion-body">
									{task.description}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

Tasks.propTypes = {
	tasks: [],
};
