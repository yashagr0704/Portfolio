#include <bits/stdc++.h>
using namespace std;

int main()
{

    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        vector<int> arr(n);
        for (int i = 0; i < n; i++)
        {
            cin >> arr[i];
        }
        bool check = false;
        for (int i = 0; i < n; i++)
        {
            if (arr[i] == 0)
            {
                check = true;
            }
        }

        if (check)
        {
            cout << 0 << endl;
            continue;
        }

        int cnt = 0;
        for (int i = 0; i < n; i++)
        {
            if (arr[i] < 0)
            {
                cnt++;
            }
        }

        if (cnt % 2 == 0)
        {
            cout << 1 << endl;
            cout << 1 << " " << 0 << endl;
        }
        else
        {
            cout << 0 << endl;
        }
    }
}