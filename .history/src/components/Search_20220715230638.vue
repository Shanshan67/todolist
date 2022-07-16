<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<table class="table table-bordered mt-5">
					<thead>
						<tr>
							<th>Title</th>
							<th>Details</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, i) in todoList" :key="i">
							<td class="align-middle w-75">
								
							</td>
							<td class="align-middle w-75">
								{{item.name}}
							</td>
						</tr>
					</tbody>
					<tfoot>
						<td class="align-middle text-center w-75">
							<div class="form-group">
								<input 
									type="text" 
									class="form-control" 
									placeholder="Enter the name you search"
									v-model="todoItem.name"
								/>
							</div>
						</td>
						<td class="align-middle text-center w-75">
							<button 
								class="btn btn-primary btn-sm mx-1"
								@click="handleSearch"
							>
								Search
							</button>
						</td>
					</tfoot>
				</table>
			</div>
		</div>
	</div>
</template>