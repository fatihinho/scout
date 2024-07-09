import 'package:flutter/material.dart';

class LanguageProvider extends ChangeNotifier {
  String _langCode = 'en';

  String get langCode => _langCode;

  void updateLangCode(String langCode) {
    _langCode = langCode;
    notifyListeners();
  }
}
