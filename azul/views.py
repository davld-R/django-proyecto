from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render
from .forms import CasesForm, MetodologiaForm, EncuestaForm
from .models import *
from django.contrib import messages
from django.contrib.auth.models import User
from django.db.models import Q

# TODO: Vista de Dumsterdiving
@login_required
def dumsterdiving(request):
    return render(request, 'training/capacitacion/dumsterdiving.html')

# TODO: Vista de Capacitación Ransomware
@login_required
def ransomware(request):
    return render(request, 'training/capacitacion/ransomware.html')

# TODO: VIsta de Phishing
@login_required
def phishing(request):
    return render(request, 'training/capacitacion/phishing.html')

# TODO: Vista de la capacitación
@login_required
def capacitacion(request):
    return render(request, 'training/capacitacion/ingeSocial.html')

# TODO: vista de la metodología en ejecución
@login_required
def ejecucionPC(request):
    return render(request, 'training/ejecucion/ejecucionPC.html')

# TODO: Vista de los PDF
@login_required
def method(request):
    return render(request, 'training/method.html')

# TODO: Vista de capacitacion
@login_required
def train(request):
    return render(request, 'training/train.html')

# TODO: Vista de los pasos de la metodología (iterativo)
@login_required
def step1(request):
    return render(request, 'directory/step1.html')

# TODO: Vista de herramientas de desencriptado
@login_required
def encryption8(request):
    return render(request, 'encrypted/encryption8.html')

# TODO: Vista de Inicio
@login_required
def feed(request):
    messages.success(request, '¡Bienvenido de nuevo!')
    return render(request, 'azul/feed.html')

# NOTE: Vista del Ransomware Golden Eye
@login_required
def goldenEye(request):
    return render(request, 'methods/goldenEye.html')

# NOTE: Vista del Ransomware Grand Crab
@login_required
def gandCrab(request):
    return render(request, 'methods/gandCrab.html')

# NOTE: Vista del Ransomware Petya
@login_required
def petya(request):
    return render(request, 'methods/petya.html')

# NOTE: Vista del Ransomware Cryptolocker
@login_required
def cryptolocker(request):
    return render(request, 'methods/cryptolocker.html')

# NOTE: Vista del Ransomware Jigsaw
@login_required
def jigsaw(request):
    return render(request, 'methods/jigsaw.html')

# NOTE: Vista del Ransomware Shade / Trol
@login_required
def shadeT(request):
    return render(request, 'methods/shadeT.html')

# NOTE: Vista del Ransomware Ryuk
@login_required
def ryuk(request):
    return render(request, 'methods/ryuk.html')

# NOTE: Vista del Ransomware Bad Rabbit
@login_required
def badRabbit(request):
    return render(request, 'methods/badRabbit.html')

# NOTE: Vista del Ransomware Wannacry
@login_required
def wanna1(request):
    return render(request, 'methods/wanna1.html')

# NOTE: Vista del Ransomware Locky
@login_required
def tools(request):
    return render(request, 'encryptedstep3/tools.html')

@login_required
def encryption6(request):
    return render(request, 'encrypted/encryption6.html')

@login_required
def copy(request):
    return render(request, 'encryptedstep6/copy.html')

@login_required
def encryption5(request):
    return render(request, 'encrypted/encryption5.html')

@login_required
def scanning(request):
    return render(request, 'encryptedstep5/scanning.html')

@login_required
def recover(request):
    return render(request, 'encryptedstep5/recover.html')

@login_required
def encryption4(request):
    return render(request, 'encrypted/encryption4.html')

@login_required
def encryption3(request):
    return render(request, 'encrypted/encryption3.html')

@login_required
def encryption7(request):
    return render(request, 'encrypted/encryption7.html')

@login_required
def encryption2(request):
    return render(request, 'encrypted/encryption2.html')

@login_required
def encryption1(request):
    return render(request, 'encrypted/encryption1.html')

@login_required
def closeCloud(request):
    return render(request, 'encryptedstep2/closeCloud.html')

@login_required
def unplug(request):
    return render(request, 'encryptedstep2/unplug.html')

@login_required
def disconnect(request):
    return render(request, 'encryptedstep2/disconnect.html')

@login_required
def encryption(request):
    return render(request, 'encrypted/encryption.html')

@login_required
def lock(request):
    return render(request, 'lockstep/lock.html')

def profile(request):
    return render(request, 'azul/profile.html')

# !: Vista del registro de casos 
@login_required(login_url='login')
def cases(request):
    current_user = get_object_or_404(User, pk=request.user.pk)
    form = CasesForm(request.POST or None, request.FILES or None)
    if form.is_valid():
        case = form.save(commit=False)
        case.user = current_user
        case.save()
        messages.success(request, 'Guardado con Exito')
        return redirect('feed')
    return render(request, 'azul/cases.html', {'form': form})

# !: Vista de la encuesta
@login_required(login_url='login')
def encuesta(request):
    
    form = EncuestaForm(request.POST or None)
    if form.is_valid():
        form.save()
        messages.success(request, 'Guardado con Exito')
        return redirect('feed')
    return render(request, 'methods/encuesta.html', {'form': form})

# !: Vista de consulta de casos
@login_required(login_url='login')
def consultcases(request, username=None):
    # Consulata la Bitacora de Casos
    current_user = request.user
    if username and username != current_user.username:
        user = User.objects.get(username=username)
        cases = Case.cases.all()
    else:
        cases = current_user.cases.all()
        user = current_user
    return render(request, 'azul/consultcases.html', {'user': user, 'cases': cases})

# !: Vista de consulta de casos2
@login_required(login_url='login')
def consultcases2(request, username=None):
    # Consulata la Bitacora de Casos
    current_user = request.user
    if username and username != current_user.username:
        user = User.objects.get(username=username)
        cases = Case.cases.all()
    else:
        cases = current_user.cases.all()
        user = current_user
    return render(request, 'azul/consultcases2.html', {'user': user, 'cases': cases})

@login_required(login_url='login')
def methodology(request):
    rasomware = ["Cifrado", "Bloqueo"]
    return render(request, 'azul/methodology.html', {'rasomware': rasomware})

# !: Vista del registro de encuesta de (metadología)
@login_required(login_url='login')
def regmethodo(request, id):
    cas = get_object_or_404(Case, id=id)
    if id and id != cas.id:
        case = Case.objects.get(id=id)
        cases = Case.cases.all()
    else:
        cases = Case.objects.all().filter(id=id)
        case = cas
    return render(request, '', {'case': case, 'cases': cases})

@login_required(login_url='login')
def survey(request, id):
    cas = get_object_or_404(Case, id=id)
    form = MetodologiaForm(request.POST or None, request.FILES or None)
    if id and id != cas.id:
        case = Case.objects.get(id=id)
        cases = Case.cases.all()
    else:
        cases = Case.objects.all().filter(id=id)
        case = cas
        if form.is_valid():
            form.save()
            messages.success(request, 'Guardado con exito')
            return redirect('feed')

    return render(request, 'encryptedstep3/survey.html', {'case': case, 'cases': cases, 'form': form})
