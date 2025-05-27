import 'package:flutter/material.dart';

class SignupPage extends StatelessWidget {
  const SignupPage({super.key}); // ✅ 确保这个构造函数存在

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Sign Up")),
      body: const Center(
        child: Text(
          "Signup Page",
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}
