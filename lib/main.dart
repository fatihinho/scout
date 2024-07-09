import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:provider/provider.dart';
import 'package:scout/constants/colors.dart';
import 'package:scout/constants/strings.dart';
import 'package:scout/l10n/l10n.dart';
import 'package:scout/providers/language_provider.dart';
import 'package:scout/screens/login_screen.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => LanguageProvider()),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    String langCode = context.watch<LanguageProvider>().langCode;

    return MaterialApp(
        title: '${AppStrings.appName} App',
        theme: AppThemes.light,
        darkTheme: AppThemes.dark,
        home: const LoginScreen(),
        locale: Locale(langCode),
        localizationsDelegates: const [
          AppLocalizations.delegate,
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
          GlobalCupertinoLocalizations.delegate,
        ],
        supportedLocales: L10n.all,
        debugShowCheckedModeBanner: false);
  }
}
