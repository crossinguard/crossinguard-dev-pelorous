---
title: "Drawbridge (planned)"
description: "Tools for modern assessment developers."
pubDate: "2025-09-28"
updatedDate: "2025-10-28"
category: "assessment"
status: "in design"
tags: ["assessment", "tools"]
---

In my work as an assessment developer (*I promise it is a real job*), I am regularly swimming in multiple choice items, answer keys, forms build documents, and assorted item codes to give each item its own unique "name". Sometimes I need all of these pieces at once, sometimes I am doing maintenance and just need chunks of functionality. My plan is to build my own personal suite of assessment tools that are local, private, and made for small teams (1+).

Whether I am back in a high school math classroom or in my current position of designing/creating/managing assessments for a university with over 150,000 activite students, I want simple-to-use tools that do a specific niche job very well. I will stress test **Drawbridge** in my own professional workflows and hope to one day open this up for anybody to use for free.

This tool is to help with item authoring, reviewing/editing, management, and banking. It will not be a student-facing tool and is not meant to handle the assessment administration or grading.

## Features (planned)

### 1. Item code generator

- define the item code schema
  - `domain`.`subdomain`-`objective`.`itemNumber`
- enter the constraints & rules for each schema component
  - data types
  - constants, variables
  - incrementing values
  - variants
  - versions

### 2. Item authoring

- status flags
  - draft, final
- various item types
  - multiple-choice, multiple-select, true/false

### 3. Item reviewing

- validate items, including content accuracy and style guide requirements

### 4. Item management (banking)

- store all items during all stages of work (authoring, reviewing, editing, final)

### 5. Assessment form manager

- define assessment schema
  - items per domain/subdomain/objective
  - fixed vs randomized question order and answer order
  - randomize within section vs randomize entire assessment
- sub-schemas for multiple assessment forms based on a common primary schema
- history of specific items
