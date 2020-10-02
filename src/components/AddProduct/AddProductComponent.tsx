import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Grid from "@materiaul/ui/core/Grid";
import Button from "@material-ui/core/Button";

import { ADD_ITEM } from "../../redux/actions";

interface IFormInput {
  title: string;
  body: string;
  userId: string;
}
