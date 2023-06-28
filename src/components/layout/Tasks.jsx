export default function Tasks({ tasks }) {
	return (
		<div className="card" style={{ minHeight:'80vh' }}>
			<p className="card-header">Assessment</p>
			<div className="card-body">
				<div className="accordion" id="accordionExample">
					{tasks.map(task => (
						<div className="accordion-item" key={task.id}>
							<h2 className="accordion-header">
								<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
									{task.name} <span style={{ paddingRight:'50%' }}>{task.dueDate}</span>
								</button>
							</h2>
							<div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
