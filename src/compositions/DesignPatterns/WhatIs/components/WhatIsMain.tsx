import React from 'react';
import { CallToAction } from '../sequences/CallToAction';
import { DefinitionPersonal } from '../sequences/DefinitionPersonal';
import { DefinitionRefactoringGuru } from '../sequences/DefinitionRefactoringGuru';
import { DefinitionWikipedia } from '../sequences/DefinitionWikipedia';
import { Disclaimer } from '../sequences/Disclaimer';
import { Intro } from '../sequences/Intro';
import { Summary } from '../sequences/Summary';

export const WhatIsMain = () => {
	return (
		<>
			<Intro></Intro>
			<DefinitionWikipedia></DefinitionWikipedia>
			<DefinitionRefactoringGuru></DefinitionRefactoringGuru>
			<DefinitionPersonal></DefinitionPersonal>
			<Summary></Summary>
			<Disclaimer></Disclaimer>
			<CallToAction></CallToAction>
		</>
	);
};
