import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:scout/constants/strings.dart';
import 'package:scout/screens/login_screen.dart';

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(32.0),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              const Icon(Icons.sports, size: 100.0),
              Text(AppStrings.appName.toUpperCase(),
                  style: const TextStyle(fontSize: 64.0)),
              const SizedBox(height: 20.0),
              TextFormField(
                controller: _emailController,
                decoration: InputDecoration(
                  hintText: AppLocalizations.of(context)!.email,
                  prefixIcon: const Icon(Icons.mail),
                  border: const OutlineInputBorder(
                      borderRadius: BorderRadius.all(Radius.circular(32.0))),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return AppLocalizations.of(context)!.email_message;
                  }
                  if (!value.contains('@')) {
                    return AppLocalizations.of(context)!
                        .email_valid_message;
                  }
                  return null;
                },
              ),
              const SizedBox(height: 20),
              TextFormField(
                controller: _passwordController,
                decoration: InputDecoration(
                  hintText: AppLocalizations.of(context)!.password,
                  prefixIcon: const Icon(Icons.lock),
                  border: const OutlineInputBorder(
                      borderRadius: BorderRadius.all(Radius.circular(32.0))),
                ),
                obscureText: true,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return AppLocalizations.of(context)!.password_message;
                  }
                  return null;
                },
              ),
              const SizedBox(height: 30),
              SizedBox(
                width: double.infinity,
                height: 50.0,
                child: ElevatedButton(
                    onPressed: () {
                      if (_formKey.currentState!.validate()) {
                        String email = _emailController.text;
                        String password = _passwordController.text;
                        // ... your register logic here ...
                      }
                    },
                    child: Text(AppLocalizations.of(context)!.register)),
              ),
              const SizedBox(height: 20),
              GestureDetector(
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => const LoginScreen()),
                  );
                },
                child: Text(AppLocalizations.of(context)!.already_have_account),
              )
            ],
          ),
        ),
      ),
    );
  }
}
