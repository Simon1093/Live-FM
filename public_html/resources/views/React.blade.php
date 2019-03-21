@extends('Child')

@section('content')
    <div id="app" class="flex flex-col">
    </div>

    <!-- Scripts -->
    <script>
        window.App = {!! json_encode([
            'name' => config('app.name'),
            'google_client_id' => config('services.google.client_id')
        ]) !!};
    </script>
    <script src="{{ asset('js/app.js') }}" defer></script>
@endsection
