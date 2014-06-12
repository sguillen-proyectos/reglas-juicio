<?php

class HomeController extends BaseController {
	public function index() {
		$rules = RuleSet::all();

		return View::make('index')
			->with('rules', $rules);
	}

	public function create() {
		return View::make('edit');
	}

	public function doCreate() {
		$ruleSet = RuleSet::create(Input::all());

		return Response::json($ruleSet);
	}

	public function execute($id) {
		$ruleSet = RuleSet::find($id);

		return View::make('execute')
			->with('model', $ruleSet);
	}

	public function getRule($id) {
		$ruleSet = RuleSet::find($id);

		$name = $ruleSet->name;
		// The json is saved as string so it must be decoded, use redis or mongo to fix, idk
		$descriptors = json_decode($ruleSet->descriptors);
		$entities = json_decode($ruleSet->entities);

		return Response::json(array(
			'name'=>$name,
			'descriptors'=>$descriptors,
			'entities'=>$entities
		));
	}
}
